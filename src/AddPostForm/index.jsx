import s from './index.module.css';

export default function AddPostForm({ addNewCard }) {

    const submit = (event) => {
        event.preventDefault();
        const { eng, rus } = event.target;
        addNewCard(eng.value, rus.value);
        eng.value = '';
        rus.value = '';
    }

    return (
        <>
            <form className={s.form} onSubmit={submit}>
                <input className={s.inputAddPostForm} type="text" name='eng' placeholder='English' />
                <input className={s.inputAddPostForm}  type="text" name='rus' placeholder='Russian' />
                <button className={s.buttonAddPostForm} >Add</button>
            </form>
        </>
    )
}
