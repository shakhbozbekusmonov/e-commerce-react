import Button from "./Button";
import { generateStars } from "../utils/generateStars";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, title, rating, category, price }) => {
    return (
        <li className='col-12 col-md-6 col-lg-3 col-xl-3 mb-3'>
            <div className='card h-100 text-center text-md-start'>
                <img
                    className='card-img-top mx-auto'
                    src={image}
                    width={250}
                    height={250}
                    alt={title}
                />
                <div className='card-body'>
                    <Link to={`/home/product/${id}`}>
                        <h3 className='card-title mb-3'>{title}</h3>
                    </Link>

                    <p className='text-secondary'>
                        {generateStars(rating.rate) + " " + rating.rate} (
                        {rating.count})
                    </p>

                    <p className='product-category'>
                        <b>Category:</b> {category}
                    </p>

                    <h5>
                        <b>Price:</b> $ {price}
                    </h5>
                </div>
                <div className='card-footer d-flex'>
                    <Button
                        color='outline-secondary'
                        className='me-2 w-100'
                        text='Add To Cart'
                    />
                    <Button
                        color='outline-secondary'
                        className='me-2'
                        icon='./bookmark.svg'
                    />
                </div>
            </div>
        </li>
    );
};

export default ProductItem;
