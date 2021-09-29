// This script grabs URL email param and adds it to the ticket form
window.onload = async function() {
	const urlParams = window.location.search.substr(1);
	const queryParams = urlParams.split('&').reduce((accumulator, singleQueryParam) => {
		const [key, value] = singleQueryParam.split('=');
		accumulator[key] = decodeURIComponent(value);
		return accumulator;
	}, {});
	console.log(`URL params are ${queryParams.email}`);
	if(queryParams.email != null) {
		document.querySelector(".freshwidget-embedded-form").src += `&helpdesk_ticket[requester]=${queryParams.email};`;
	}
};
