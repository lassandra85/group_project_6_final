import  {Btn}  from "./Button.styled";

// - type - функціонал / призначення кнопки;
// - text - обов'язковий - текст кнопки;
// - clickHandler - обов'язковий - обробляє подію 'click' на кнопці;
// - icon - не обов'язковий - отримує React Component, рендериться після тексту кнопки;
// - filled - не обов'язковий - робить фон кнопки синім у звичайному стані;
// - short - не обов'язковий - зменшує довжину кнопки з 252px до 129px;

const Button = ({text,icon,short,heart,filled,onClick}) => {
    return (
      <Btn
        type='button'
       
   
      >
        {text}
        {icon}
      </Btn>
    );
  };

export default Button