import { Grid } from 'react-loader-spinner';

import css from './AppLoader.module.css';
const AppLoader = () => {
  return (
    <div className={css.loader}>
      <Grid
        height="80"
        width="80"
        color="#3f51b5"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
export default AppLoader;
