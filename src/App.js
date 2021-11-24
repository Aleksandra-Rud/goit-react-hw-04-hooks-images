// import React, { Component } from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import { getPictures } from "./services/apiService";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchBarSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (query === "") {
      return;
    } else {
      addPicture();
    }

    // getPictures(query, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    if (page !== 2) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  });

  const addPicture = () => {
    setIsLoading(true);

    getPictures(query, page)
      .then((response) => {
        if (response.length === 0) {
          return alert(`no results for ${query}`);
        }
        setImages([...images, ...response]);
        setPage(page + 1);
      })
      .catch(() => alert("Oops, here is a problem! Please try again..."))
      .finally(() => setIsLoading(false));
  };

  const reset = () => {
    setImages([]);
    setPage(1);
    addPicture(query);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onOpenModal = (e) => {
    e.preventDefault();
    setLargeImage(e.target.dataset.img);
    toggleModal();
  };

  // componentDidUpdate(prevProps, prevState) {
  //   const prevSearchQuery = prevState.query;
  //   const nextSearchQuery = this.state.query;
  //   if (prevSearchQuery !== nextSearchQuery) {
  //     this.addPicture();
  // }

  return (
    <div>
      <Searchbar onSubmit={handleSearchBarSubmit} reset={reset} />
      {isLoading && <Loader />}
      <ImageGallery images={images} onOpenModal={onOpenModal} />
      {images.length > 0 && <Button onClick={addPicture} />}
      {showModal && (
        <Modal onClick={toggleModal}>
          <img src={largeImage} alt="" />
        </Modal>
      )}
    </div>
  );
}

export default App;
