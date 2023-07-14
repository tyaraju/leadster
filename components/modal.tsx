import React, { ReactNode, useEffect } from "react"
interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggleModal: () => void;
}

const ModalComponent = (props: ModalType) => {
  //const [isOpen, setisOpen] = useState(false);
  //@TODO
  /*useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "escape" ? props.toggleModal() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    }
  }, [props.toggleModal])
  */
  useEffect(() => {
    if(props.isOpen) {
      document.body.style.overflow = 'hidden';
      //console.log('tyara',props.isOpen);
    } else {
      document.body.style.overflow = 'unset';
    }
    return (): void => {
    };
  },[props.isOpen]);

  //if (isOpen) return null;
  
  return (
    <>
      {props.isOpen && (
        <div className="modal flex top-0 left-0 w-screen h-screen z-40 justify-center align-center pt-[56%]">
          <div className="fixed top-0 left-0 w-screen h-screen z-40 bg-neutral-800 opacity-50" onClick={props.toggleModal}></div>
          <div className="modal-content fixed rounded-[18px] flex flex-col z-50 max-w-[600px] flex-col justify-center bg-white mx-auto overflow-hidden">
            <div className="bg-blue-primary h-[5px] leading-[5px] absolute top-0 left-0 w-full"></div>
            <button className="pt-[10px] px-[17px] self-end font-bold font-[#627397] text-[19px]" onClick={props.toggleModal}>&#x2715;</button>
            <div className="" onClick={(e) => e.stopPropagation()}>
              {props.children}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ModalComponent;