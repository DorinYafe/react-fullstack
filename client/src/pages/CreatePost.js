import React from 'react';
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function CreatePost() {
  const initialValues = {
    title: '',
    postText: '',
    username: '',
  };

  const onSubmit = (data) => {
    axios.post('http://localhost:3001/posts', data).then((response) => {
      console.log('greate!');
    });
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    postText: Yup.string().required('Text is required'),
    username: Yup.string().min(3).max(6).required('Username is required'),
  });

  return (
    <div className='createPostPage'>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        <Form className='formContainer'>
          <label>Title: </label>
          <ErrorMessage name='title' component='span' />
          <Field
            autoComplete='off'
            id='inputCreatePost'
            name='title'
            placeholder='some title'></Field>

          <label>Post: </label>
          <ErrorMessage name='postText' component='span' />
          <Field
            autoComplete='off'
            id='inputCreatePost'
            name='postText'
            placeholder='some text post'></Field>

          <label>Title: </label>
          <ErrorMessage name='username' component='span' />
          <Field
            autoComplete='off'
            id='inputCreatePost'
            name='username'
            placeholder='some username'></Field>
          <button type='submit'>Create a post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
