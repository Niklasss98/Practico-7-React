import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';


type MyModalProps ={
    show: boolean;
    onHide: () => void;
    handleColorChange: (color:string) => void;
}

const ModalColorPick = ({show, onHide, handleColorChange}:MyModalProps) => {
  
    /* Variables para guardar el valor seleccionado del formulario */
    const [selectedColor, setSelectedColor] = useState ("#FFF");
    const handleColorPickerChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        setSelectedColor(event.target.value);
    }

    /* Al hacer click en aceptar, se pasa el color elegido a la función que proviene del componente padre y se cierra el modal */
    const handleAcceptClick = () => {
        handleColorChange(selectedColor);
        onHide();
    }
  
    return (    /* Aquí colocar el modal elegido */
        <Modal show={show} onHide={onHide} centered backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Cambiar color</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Color Picker */}
                <Form.Label htmlFor="exampleColorInput">Elegir Color</Form.Label>
                <Form.Control
                type='color'
                id='exampleColor'
                defaultValue="#FFF"
                title="Elije tu color"
                onChange={handleColorPickerChange}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Cancelar</Button>
                <Button variant='primary' onClick={handleAcceptClick}>Aceptar</Button>
            </Modal.Footer>
        </Modal>
  )
}

export default ModalColorPick