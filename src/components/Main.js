import profileAvatar from '../images/profile__avatar.jpg';

function Main() {
  return (
		<main className="content">
			<section className="profile content__profile">
				<div className="profile__container">
					<div className="profile__avatar-area">
						<img
							className="profile__avatar"
							src={profileAvatar}
							alt="Фотография профиля."
						/>
					</div>
					<div className="profile__info">
						<h1 className="profile__title">Жак-Ив Кусто</h1>
						<p className="profile__subtitle">Исследователь океана</p>
						<button
							className="profile__edit-button"
							type="button"
							aria-label="Редактировать профиль"
						></button>
					</div>
				</div>
				<button
					type="button"
					className="profile__add-button"
					aria-label="Добавить публикацию"
				></button>
			</section>
			<section className="places content__places">
				<ul className="places__list"></ul>
			</section>
		</main>
  );
}

export default Main;