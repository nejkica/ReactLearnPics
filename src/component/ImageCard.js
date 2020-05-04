import React from 'react';

class ImageCard extends React.Component { 
	constructor(props) {
		super(props);
		this.state = { spans: 0};
		this.imageRef = React.createRef();
	};

	componentDidMount() {
		this.imageRef.current.addEventListener('load', this.setSpans)
	};

	setSpans = () => {
		const height = this.imageRef.current.clientHeight;
		
		const spans = Math.ceil(height / 10);

		this.setState({ spans}); //spans: spans je stara in cela sintaksa, v ES2015 je pa lahko samo spans
	}

	render() {
		const { description, urls } = this.props.image;

		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }} >
				<img ref={this.imageRef} src={urls.regular} alt={description} />

			</div>
		);
	}
}

export default ImageCard;