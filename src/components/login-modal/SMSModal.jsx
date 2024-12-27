import { MdClose } from "react-icons/md";
import {useEffect, useState} from "react";

const SMSModal = (props) => {
    const {setShowModal}  = props;
    const [timer, setTimer] = useState(59);
    const [start, setStart] = useState(false);
    const [generatedCode, setGeneratedCode] = useState(null);
    const [otp,setOtp] = useState( {
        value1: "",
        value2: "",
        value3: "",
        value4: "",
    });

    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const inputs = document.querySelectorAll("input");

        inputs.forEach((input, index) => {
            // Событие ввода текста
            input.addEventListener("input", () => {
                if (input.value.length === input.maxLength) {
                    // Переходим к следующему инпуту, если он существует
                    const nextInput = inputs[index + 1];
                    if (nextInput) {
                        nextInput.focus();
                    }
                }
            });

            // Событие удаления текста (клавиша Backspace)
            input.addEventListener("keydown", (event) => {
                if (event.key === "Backspace" && input.value === "") {
                    // Переходим к предыдущему инпуту, если он существует
                    const prevInput = inputs[index - 1];
                    if (prevInput) {
                        prevInput.focus();
                    }
                }
            });
        });
        const countdown = setInterval(() => {
            setTimer(prevTimer => {
                if(prevTimer === 55){
                    const random = Math.floor( 1000 + Math.random() * 9000 );
                    setGeneratedCode(random);
                    alert(`Ваш код: ${random}`);
                    // alert(random)



                }
                if (prevTimer <= 1) {
                    clearInterval(countdown);
                    return 0;
                }
                return prevTimer - 1;
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, [start]);
    const onChange = (e) => {
        const {name, value} = e.target;
        setOtp( (prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }
    const handleLogin = () => {
        const enteredCode = `${otp.value1}${otp.value2}${otp.value3}${otp.value4}`;
        if (enteredCode === generatedCode?.toString()) {
            setErrorMessage(""); // Убираем сообщение об ошибке
            setShowModal(""); // Закрываем модальное окно
        } else {
            setErrorMessage("повторите попытку.");
        }
    };return (
        <div className={"fixed flex w-full h-[100vh] inset-0 backdrop-blur-sm bg-[#19191966] items-center justify-center"}>
            <div className={"text-center w-[850px] rounded-[24px] relative bg-white py-[40px] px-[20px] shadow-md"}>
                <button onClick={ () => {
                    setShowModal('');
                } } className={"absolute -right-[35px] top-[12px] text-[32px] text-gray-400"}>
                    <MdClose />
                </button>
                <h2 className={"text-[24px] font-semibold mb-[16px]"}>Код из SMS</h2>
                <p className={"text-[#A5A5A5] mb-[20px]"}>На номер +7 (XXX) XXX-XX-XX</p>
                <div className={"w-[240px] mx-auto"}>
                    <div className={"flex justify-center gap-[10px] mb-[20px]"}>
                        <input
                            type="text"
                            name={"value1"}
                            onChange={onChange}
                            value={otp.value1}
                            maxLength={1}
                            className={"w-[50px] h-[50px] text-center text-[24px] border border-[#F0F0F0] rounded-[8px] focus:outline-0 focus:border-[#FF7010]"}
                        />
                        <input
                            type="text"
                            name={"value2"}
                            onChange={onChange}
                            value={otp.value2}
                            maxLength={1}
                            className={"w-[50px] h-[50px] text-center text-[24px] border border-[#F0F0F0] rounded-[8px] focus:outline-0 focus:border-[#FF7010]"}
                        />
                        <input
                            type="text"
                            name={"value3"}
                            onChange={onChange}
                            value={otp.value3}
                            maxLength={1}
                            className={"w-[50px] h-[50px] text-center text-[24px] border border-[#F0F0F0] rounded-[8px] focus:outline-0 focus:border-[#FF7010]"}
                        />
                        <input
                            type="text"
                            name={"value4"}
                            onChange={onChange}
                            value={otp.value4}
                            maxLength={1}
                            className={"w-[50px] h-[50px] text-center text-[24px] border border-[#F0F0F0] rounded-[8px] focus:outline-0 focus:border-[#FF7010]"}
                        />
                    </div>
                    <button
                        onClick={handleLogin}

                        // onClick={() => {
                        //
                        //     setShowModal('');
                        // }}
                        className={"w-full py-[13px] bg-[#FF7010] text-white text-[16px] font-semibold rounded-[16px] mb-[12px]"}>Войти</button>
                    {errorMessage && <p className="text-red-500 text-[14px]">{errorMessage}</p>}
                </div>

                <p
                    onClick={ () => {
                        setStart(true);
                        setTimer(59)
                        setGeneratedCode(null);
                    }}
                    className={"text-center cursor-pointer text-[#A5A5A5] text-[14px]"}>Отправить код ещё раз через :{timer.toString().padStart(2, "0")} секунд</p>
            </div>
        </div>
    );
};

export default SMSModal;