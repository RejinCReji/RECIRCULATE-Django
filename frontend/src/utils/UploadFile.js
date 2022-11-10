import React from 'react';
import Dropzone from 'react-dropzone';

function UploadFile() {
  const onDrop = (files) => {
    console.log('drop worked');
  };
  return (
    <div
      className="mb-3"
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <Dropzone onDrop={onDrop} multiple maxSize={800000000}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: '150px',
              height: '150px',
              border: '1px solid lightgray',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            {...getRootProps()}
          >
            {console.log('getRootProps', { ...getRootProps() })}
            {console.log('getInputProps', { ...getInputProps() })}
            <input {...getInputProps()} />
            <i className="fas fa-plus" style={{ fontSize: '3rem' }}></i>
          </div>
        )}
      </Dropzone>
    </div>
  );
}

export default UploadFile;
