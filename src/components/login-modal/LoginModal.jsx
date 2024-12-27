import { GrClose } from "react-icons/gr";


const LoginModal = (props) => {
    const {setShowModal} =props;
    return (

        <div className={"fixed flex items-center justify-center w-full h-[100vh] inset-0 bg-[#19191988] backdrop-blur-sm"}>
            <div className={"text-center w-[850px] relative rounded-[24px] bg-white py-[60px]"}>
                <button onClick={ () => setShowModal('')}
                        className={"absolute -right-[40px] top-0 text-white text-3xl "}>
                    <GrClose/>
                </button>

                <div className={"w-[320px] mx-auto"}>
                    <h2 className={"text-[32px] mb-[16px] "}> Вхот в аккаунт</h2>
                    <p className={"mb-[20px]"}> Сможете быстро оформлять заказы,
                        использовать бонусы </p>
                    <label className={"block mb-[8px] text-[#A5A5A5] text-left"} htmlFor={"tel"}>Номер телефона</label>
                    <input
                        className={"w-[320px] focus:outline-0 border border-[#F0F0F0] py-[13px] px-[16]"} type="tel" id={"tel"} placeholder={"+996 707 777 777"}/>
                    <button onClick={ () => {setShowModal('sms')}}
                            className={"w-full text-white py-[13px] mt-[16px] mb-[12px] bg-[#FF7010]"}> Войти </button>
                    <p className={"text-center text-[#191919]"}>
                        Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением
                    </p>
                </div>
            </div>
        </div>
    );
};




export default LoginModal;