import './index.css';

const ProductImagesCarousel = ({product}) => {
    const images=['${product.image}']
    return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0"
                    className="active"
                    aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <svg className="bd-placeholder-img" width="100%" height="100%"
                     xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                     preserveAspectRatio="xMidYMid slice" focusable="false">
                    <rect width="100%" height="100%" fill="#777"/>
                </svg>

                <div className="container">
                    <div className="carousel-caption text-start">
                        <img width ="100%" src="https://i.dummyjson.com/data/products/1/4.jpg"></img>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <svg className="bd-placeholder-img" width="100%" height="100%"
                     xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                     preserveAspectRatio="xMidYMid slice" focusable="false">
                    <rect width="100%" height="100%" fill="#777"/>
                </svg>

                <div className="container">
                    <div className="carousel-caption">
                        <img width ="100%" src="https://i.dummyjson.com/data/products/1/3.jpg"></img>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <svg className="bd-placeholder-img" width="100%" height="100%"
                     xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                     preserveAspectRatio="xMidYMid slice" focusable="false">
                    <rect width="100%" height="100%" fill="#777"/>
                </svg>

                <div className="container">
                    <div className="carousel-caption text-end">
                        <img width ="100%" src="https://i.dummyjson.com/data/products/1/2.jpg"></img>
                    </div>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel"
                data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel"
                data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    );
};

export default ProductImagesCarousel;