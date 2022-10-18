import { CancleDark } from '../icons';

function Modal({ title, children, modalOpen, onModalClose }) {
  return (
    <>
      {modalOpen && (
        <div className="modal-bg fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-60 z-[50]">
          <div className="modal-container fixed right-[28vw] top-[8vh] w-[40%] bg-white rounded-xl p-6 z-[100]">
            <div className="modal-header flex justify-between items-center pb-3">
              <div onClick={onModalClose}>
                <CancleDark />
              </div>
              <h1 className="modal-title font-semibold text-lg">{title}</h1>
              <div className="invisible">
                <CancleDark />
              </div>
            </div>

            <hr />

            <div className="modal-body pt-7">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
