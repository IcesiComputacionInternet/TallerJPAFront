function ToastAlert({ message, onClose }: { message: string; onClose: () => void }) {
    return (
        <div
            aria-live="polite"
            aria-atomic="true"
            className="d-flex justify-content-center align-items-center"
            style={{ minWidth: "50vw", minHeight: "50vh" }}
        >
            <div 
                role="alert" 
                aria-live="assertive"
                aria-atomic="true"
                className="toast show" 
                style={{ maxWidth: "50vw", minHeight: "20vh" }}
            >
                <div className="toast-header">
                    <strong 
                        className="me-auto"
                        style={{fontSize: "20px"}}
                    >
                        Alerta
                    </strong>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Cerrar" onClick={onClose}></button>
                </div>
                <div className="toast-body" style={{ fontSize: "18px" }}>
                    {message}
                </div>
            </div>
        </div>
    );
  }
  
  export default ToastAlert;
  