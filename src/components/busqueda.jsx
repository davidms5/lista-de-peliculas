import React from 'react';

const Busqueda = (props) => {
	return (
		<div className='col col-sm-4'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='buscar...'
			></input>
		</div>
	);
};

export default Busqueda;