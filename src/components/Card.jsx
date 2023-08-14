import Button from "./Button";
import { generateStars } from "../utils/generateStars";

const Card = ({ title, category, image, price, description, rating }) => {
    return (
        <div className='card p-4 mb-5'>
            <div className='row'>
                <div className='col-12 col-md-6 h-100'>
                    <img
                        className='w-100'
                        height='500'
                        src={image}
                        alt={title}
                    />
                </div>
                <div className='col-12 col-md-6 h-100'>
                    <div className='card-body'>
                        <h1 className='display-3 mb-3'>{title}</h1>

                        <p className='display-5 product-category mb-3'>
                            Category: {category}
                        </p>
                        <p className='display-5'>Price: ${price}</p>
                        <p className='display-6'>
                            {generateStars(rating?.rate)} {rating?.rate} (
                            {rating?.count})
                        </p>
                        <p>{description}</p>
                    </div>
                    <div className='card-footer d-flex'>
                        <Button
                            color='outline-secondary'
                            className='w-100 me-2'
                            text='Add To Cart'
                        />
                        <Button
                            color='outline-secondary'
                            className='w-100 me-2'
                            text='Go To Cart'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
