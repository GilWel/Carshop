import styles from './MyButton.module.css'
interface MyButtonProps{
    func:()=>void;
    text:string;
}

export default function MyButton ({func, text}: MyButtonProps):JSX.Element{
  return (
    <button onClick={func} className={styles.myButton}>
      {text}
    </button>
  )
}
