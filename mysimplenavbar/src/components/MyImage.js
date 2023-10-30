import myImg from './logo.png';

function MyImage() {
    const myImgStyle = { 
        width: '80px',
        height: '80px',
        paddingRight: '30px',
    };

    return (
        <img 
            src={myImg} 
            alt="My Img"
            style={myImgStyle}    
        />
    );
}

export default MyImage;