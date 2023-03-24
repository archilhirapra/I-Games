import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className="d-flex justify-content-center align-items-center gap-3">
            <Button onClick={() => navigate('/action')}>Action</Button>
            <Button onClick={() => navigate('/adventure')}>Adventure</Button>
            <Button onClick={() => navigate('/')}>Home</Button>
        </div>
    )
}
export default Footer;