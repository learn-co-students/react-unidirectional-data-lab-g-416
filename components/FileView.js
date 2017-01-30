'use strict'

const React = require('react');
const Toolbar = require('./Toolbar');

const FileView = ({
  //args
  file,
  onChange,
  onAdd,
  onRemove
}) => (
  <div className="file-view">
      <Toolbar onAdd={onAdd} onRemove={onRemove}/>
      <textarea 
        className='file-view__text' 
        value={file} 
        onChange={onChange} 
        placeholder="Enter some text"
        />
  </div>
);

module.exports = FileView;
