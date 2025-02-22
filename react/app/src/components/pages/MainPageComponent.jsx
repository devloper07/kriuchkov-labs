import LinkComponent from "../linkComponent/LinkComponent";


const MainPageComponent = () => {
    return (
        <div className="main_page">
            <LinkComponent link="/acordions" > Акордион </LinkComponent>
            <LinkComponent link="/switch" > Переключатели </LinkComponent>
            <LinkComponent link="/switch-redux" > Переключатели (redux) </LinkComponent>
            <LinkComponent link="/modalWindow" > Модальное окно </LinkComponent>
            <LinkComponent link="/matrix" > Кубическая матрица </LinkComponent>
        </div>
    );
};

export default MainPageComponent;