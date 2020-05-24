import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import iFrameResize from "iframe-resizer";

const Iframe = ({ id, src, origins, resize, resizeLog }) => {

	const iframeRef = useRef();

	const resizeOptions = {
		log: resizeLog,
		warningTimeout: 10000,
		resizedCallback: function (e) {
			e.iframe.parentNode.classList.remove("wpc-iframe-wrapper--loading");
		}
	};

	if (origins.length > 0) {
		resizeOptions.checkOrigin = origins;
	}

	useEffect(() => {
		resize && iFrameResize.iframeResizer(resizeOptions, "#" + iframeRef.current.id);
	}, []);

	const wrapperAttr = {
		className: "wpc-iframe-wrapper"
	};

	const iframeAttr = {
		ref: iframeRef,
		id: id,
		src: src,
		className: "wpc-iframe"
	};

	if (resize) {
		wrapperAttr.className += " wpc-iframe-wrapper--loading";
		iframeAttr.className += " wpc-iframe--resize";
	}

	return <div {...wrapperAttr}>
		{resize && <div className="wpc-iframe-wrapper__loading">
			<p>The form is loading.</p>
		</div>}
		<iframe {...iframeAttr} />
	</div>;
};

Iframe.defaultProps = {
	id: "wpcIframe",
	resize: true,
	origins: [],
	resizeLog: false,
};

Iframe.propTypes = {
	id: PropTypes.string,
	src: PropTypes.string.isRequired,
	resize: PropTypes.bool,
	origins: PropTypes.array,
	resizeLog: PropTypes.bool
};

export default Iframe;