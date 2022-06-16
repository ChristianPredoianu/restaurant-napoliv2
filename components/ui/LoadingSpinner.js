import classes from '@/components/ui/LoadingSpinner.module.css';

export default function LoadingSpinner() {
  return (
    <div className={classes.loadingSpinner}>
      <div className={classes.loader}>Loading...</div>
    </div>
  );
}
