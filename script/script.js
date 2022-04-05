(() => {
	const submitButton = document.querySelector('[data-submit]');
	const ratingButtonsArea = document.querySelector('[data-ratingArea]');
	const ratingButtons = document.querySelectorAll('[data-rating]');
	const ratingOverview = document.querySelector('[data-overview]');
	const ratingPreview = document.querySelector('[data-preview]');
	const ratingValue = document.querySelector('[data-score]');

	let currentRating;

	const changeUIRating = () => {
		ratingValue.textContent = currentRating;
		ratingOverview.style.display = 'block';
		ratingPreview.style.display = 'none';
	};

	const clearAllActiveRatingButtons = () => {
		ratingButtons.forEach(ratingButton =>
			ratingButton.classList.remove('active')
		);
	};

	const setCurrentRating = ({ target }) => {
		clearAllActiveRatingButtons();

		if (target.classList.contains('rating__button')) {
			currentRating = target.textContent;
			target.classList.add('active');
		}
	};

	const showRatingOverview = () => {
		if (!currentRating) return;

		changeUIRating();
	};

	ratingButtonsArea.addEventListener('click', e => setCurrentRating(e));
	submitButton.addEventListener('click', showRatingOverview);
})();
