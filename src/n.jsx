// import { useState, useEffect } from "react";

// import ImageGallery from "./components/ImageGallery";
// import Modal from "./components/Modal";
// import Searchbar from "./components/Searchbar";
// import Button from "./components/Button";
// import LoaderIcon from "./components/Loader";

// import api from "./services/pixabay-api";

// function App() {
//   const [query, setQuery] = useState("");
//   const [images, setImages] = useState([]);
//   const [page, setPages] = useState(1);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [largeImage, setLargeImage] = useState("");

//   // метод для сохранения поиска
//   const handleSearchBarSubmit = (query) => {
//     setQuery(query);
//     setPages(1);
//     setImages([]);
//   };

//   // //метод запроса на сервер
//   useEffect(() => {
//     if (query === "") {
//       return;
//     }

//     getPictures();
//   }, [query]);

//   // проверка для плавного скролла
//   useEffect(() => {
//     if (page !== 1) {
//       window.scrollTo({
//         top: document.documentElement.scrollHeight,
//         behavior: "smooth",
//       });
//     }
//   });

//   const getPictures = () => {
//     setIsLoading(true);

//     api
//       .getPictures(query, page)
//       .then((response) => {
//         setImages([...images, ...response]);
//         setPages(page + 1);
//       })
//       .catch(() => alert("Please, try again..."))
//       .finally(() => setIsLoading(false));
//   };

//   const reset = () => {
//     setImages([]);
//     setPages(1);
//   };

//   const toggleShowModal = () => {
//     setShowModal((prev) => !prev);
//   };

//   const onOpenModal = (e) => {
//     setLargeImage(e.target.dataset.img);
//     toggleShowModal();
//   };

//   return (
//     <div>
//       <Searchbar onSubmit={handleSearchBarSubmit} reset={reset} />
//       {isLoading && <LoaderIcon />}
//       <ImageGallery images={images} onOpenModal={onOpenModal} />
//       {images.length > 0 && <Button onClick={getPictures} />}

//       {showModal && (
//         <Modal onClick={toggleShowModal}>
//           <img src={largeImage} alt="" />
//         </Modal>
//       )}
//     </div>
//   );
// }

// https://pixabay.com/get/g3873d69cdd8706ceadc59ab741425932db654d62f820f0452f31d16edd3d6972ff65e1938e5632cd42117fb25c2b7396fc7c0c10eb819e0659ca54a5830b087d_640.jpg
// https://pixabay.com/get/gb39b06f3f321d30308848509a46dc626aed45dbd33eb9361e09458efa58d111e3a52f65ed2ff651983de836f242a25310d63e2d6a6708aadf7ddae98ba6dcb5c_640.jpg
