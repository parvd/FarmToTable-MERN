import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button , Table} from 'react-bootstrap';
import Layout from '../../component/Layout';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../component/UI/Input/input';
import NewModal from '../../component/UI/Modal/modal';
import { addProduct } from '../../actions/product-actions';
const Products = (props) => {
	const [show, setShow] = useState(false);
	const [name, setName] = useState('');
	const [quantity, setQuantity] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');
	const [categoryId, setCategoryId] = useState('');
	const [productPictures, setProductPictures] = useState([]);

	const category = useSelector((state) => state.category);
	const dispatch = useDispatch();

	const createCategoryList = (categories, options = []) => {
		for (let category of categories) {
			options.push({ value: category._id, name: category.name });
			if (category.children.length > 0) {
				createCategoryList(category.children, options);
			}
		}
		return options;
	};

	const handleShow = () => setShow(true);

	const handleClose = () => {
		const form = new FormData();

		console.log('hellow');
		form.append('name', name);
		form.append('quantity', quantity);
		form.append('price', price);
		form.append('description', description);
		form.append('category', categoryId);
		for (let pic of productPictures) {
			form.append('productPictures', pic);
		}
		dispatch(addProduct(form));
		setShow(false);
	};

	const handleProductImage = (e) => {
		setProductPictures([...productPictures, e.target.files[0]]);
	};
	return (
		<Layout sidebar>
			<Container>
				<Row>
					<Col md={12}>
						<div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '12px' }}>
							<h3>Product</h3>
							<Button variant="primary" onClick={handleShow}>
								Add
							</Button>
						</div>
					</Col>
				</Row>
				<Row style={{paddingTop:'30px'}}>
					<Col>
						<Table responsive="sm" >
							<thead>
								<tr>
									<th>#</th>
									<th>Table heading</th>
									<th>Table heading</th>
									<th>Table heading</th>
									<th>Table heading</th>
									<th>Table heading</th>
									<th>Table heading</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Table cell</td>
									<td>Table cell</td>
									<td>Table cell</td>
									<td>Table cell</td>
									<td>Table cell</td>
									<td>Table cell</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Table cell</td>
									<td>Table cell</td>
									<td>Table cell</td>
									<td>Table cell</td>
									<td>Table cell</td>
									<td>Table cell</td>
								</tr>
								<tr>
									<td>3</td>
									<td>Table cell</td>
									<td>Table cell</td>
									<td>Table cell</td>
									<td>Table cell</td>
									<td>Table cell</td>
									<td>Table cell</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
			</Container>
			<NewModal show={show} handleClose={handleClose} modalTitle={`Add New Category`}>
				<Input value={name} placeholder={`Product Name`} onChange={(e) => setName(e.target.value)} />
				<Input value={quantity} placeholder={`Enter Quantity`} onChange={(e) => setQuantity(e.target.value)} />
				<Input value={price} placeholder={`Enter Price`} onChange={(e) => setPrice(e.target.value)} />
				<Input
					value={description}
					placeholder={`description`}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<select
					className="form-control"
					value={categoryId}
					placeholder={`category Name`}
					onChange={(e) => setCategoryId(e.target.value)}
				>
					<option default>Select Option</option>
					{createCategoryList(category.categories).map((option) => (
						<option key={option.value} value={option.value}>
							{option.name}
						</option>
					))}
				</select>
				{productPictures.length > 0
					? productPictures.map((pic, index) => <div key={index}>{pic.name}</div>)
					: null}
				<Input type="file" onChange={handleProductImage} />
			</NewModal>
		</Layout>
	);
};
export default Products;
