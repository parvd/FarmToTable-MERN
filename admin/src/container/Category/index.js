import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Layout from '../../component/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, addCategory } from '../../actions';
import Input from '../../component/UI/Input/input';
import NewModal from '../../component/UI/Modal/modal';

const Category = (props) => {
	const category = useSelector((state) => state.category);
	const [show, setShow] = useState(false);
	const [categoryName, setCategoryName] = useState('');
	const [categoryImage, setCategoryImage] = useState('');
	const [parentCategoryId, setParentCategoryId] = useState('');
	//console.log(category);
	const dispatch = useDispatch();

	const handleClose = () => {
		const form = new FormData();
		const data = {
			categoryName,
			parentCategoryId,
			categoryImage,
		};
		//console.log(data);
		form.append('name', categoryName);
		form.append('parentId', parentCategoryId);
		form.append('categoryImage', categoryImage);
		dispatch(addCategory(form));
		setShow(false);
	};
	const handleShow = () => setShow(true);
	const handlePromptClose = () => setShow(false);
	const handleChangeImage = (e) => {
		setCategoryImage(e.target.files[0]);
	};

	const renderCategories = (categories) => {
		let myCategories = [];
		for (let category of categories) {
			myCategories.push(
				<li key={category.name}>
					{category.name}
					{category.children ? <ul>{renderCategories(category.children)}</ul> : null}
				</li>
			);
		}
		return myCategories;
	};

	const createCategoryList = (categories, options = []) => {
		for (let category of categories) {
			options.push({ value: category._id, name: category.name });
			if (category.children.length > 0) {
				createCategoryList(category.children, options);
			}
		}
		return options;
	};

	return (
		<Layout sidebar>
			<Container>
				<Row>
					<Col md={12}>
						<div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '12px' }}>
							<h3>Category</h3>
							<Button variant="primary" onClick={handleShow}>
								Add
							</Button>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={12}>{<ul>{renderCategories(category.categories)}</ul>}</Col>
				</Row>
				<NewModal show={show} handleClose={handleClose} modalTitle={`Add New Category`}>
					<Input
						value={categoryName}
						placeholder={`Category Name`}
						onChange={(e) => setCategoryName(e.target.value)}
					/>
					<select
						className="form-control"
						value={parentCategoryId}
						onChange={(e) => setParentCategoryId(e.target.value)}
					>
						<option>Select Category</option>
						{createCategoryList(category.categories).map((option) => (
							<option key={option.value} value={option.value}>
								{option.name}
							</option>
						))}
					</select>
					<Input
						type="file"
						name="myImage"
						accept="image/png, image/gif, image/jpeg"
						onChange={handleChangeImage}
					/>
				</NewModal>
			</Container>
		</Layout>
	);
};
export default Category;
