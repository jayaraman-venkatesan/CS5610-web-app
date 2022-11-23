const ModalInfo = (prop) => {
    return(
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">{prop.info.infoName}</span>
            </div>
            <input type={prop.info.type} id={prop.info.infoName} class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
        </div>
    );
}

export default ModalInfo;