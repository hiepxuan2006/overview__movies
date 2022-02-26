// import React, { useContext } from "react";
// import { ShowContext } from "../BackgroundSlide";
// import "./TrailerView.scss";
// function TrailerView(props) {
//   const showContext = useContext(ShowContext)

//   const { onClose, iframeRef, isShowTrailer } = props;
//   const handleHiddenTrailer = () => {
//     showContext.valueShow.setShowTrailer();

//   }
//   return (
//     <div className={`model ${isShowTrailer ? 'showbackdrop' : 'hiddenbackdrop'}`} active={false}>
//       <div className="backdrop" onClick={handleHiddenTrailer}></div>
//       <div className="modal__content" onClose={onClose}>
//         <iframe
//           src="https://www.youtube.com/embed/xgMerFOlw48"
//           ref={iframeRef}
//           width="100%"
//           height="500px"
//           title="trailer"
//         ></iframe>
//       </div>
//     </div>
//   );
// }

// export default TrailerView;
