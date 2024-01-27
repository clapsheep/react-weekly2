import classes from "./Reviewcomponent.module.css";

export function ReviewList({
  userClass,
  name,
  product,
  content,
  date,
  recommand,
  isBest,
}) {
  return (
    <li className={classes.reviewList}>
      <div className={classes.reviewListClass}>
        {isBest ? <span className={classes.best}>베스트</span> : <></>}
        <span className={classes.userClass}>{userClass}</span>
        <span>{name}</span>
      </div>
      <div className={classes.contentWrapper}>
        <h3 className={classes.product}>{product}</h3>
        <p className={classes.content}>{content}</p>
        <p className={classes.date}>{date}</p>
      </div>
      <button className={classes.recommandButton} type="button">
        <svg
          aria-hidden="true"
          width={14}
          height={14}
          viewBox="0 0 14 14"
          role="img"
        >
          <use href="_sprite.svg#thumb" />
        </svg>
        도움돼요
        <span>{recommand}</span>
      </button>
    </li>
  );
}

export function ReviewContainer({ children }) {
  return <ul style={{ margin: "0 auto", width: "1050px" }}>{children}</ul>;
}
