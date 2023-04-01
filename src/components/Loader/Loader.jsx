import { Grid } from 'react-loader-spinner';

import css from './Loader.module.css';
const Loader = () => {
  return (
    <div className={css.loader}>
      <Grid
        height="28"
        width="28"
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
export default Loader;
