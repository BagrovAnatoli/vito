import classes from './index.module.scss';
import Header from '../../components/header';

function ProfilePage() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <Header classes={classes} />
            </div>
        </div>
    );
}

export default ProfilePage;
