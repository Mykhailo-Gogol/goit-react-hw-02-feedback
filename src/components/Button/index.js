import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
  button: {
    border: 'none',
    backgroundColor: 'lightblue',
    color: 'black',
    padding: [5, 10],
    borderRadius: 2,
    '&:active': {
      outline: 'auto',
      backgroundColor: 'lightcyan'
    },
    '&:not(:last-child)': {
      marginRight: 20
    }
  }
})


const Button = ({ handler, buttonTitle }) => {
  const s = useStyles()

  return (
    <button onClick={() => handler()} className={s.button} type="button">
      {buttonTitle}
    </button>
  );
};

export default Button;
