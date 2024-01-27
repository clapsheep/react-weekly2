import classes from "./Notice.module.css";
export function Notice({ title, children }) {
  return (
    <details
      style={{
        margin: "0 auto",
        width: "1050px",
      }}
    >
      <summary>
        <h3>
          <span className={classes.classNotice}>공지</span>
          <span>{title}</span>
        </h3>
      </summary>
      <div className={classes.noticeContent}>
        <span>{children}</span>
      </div>
    </details>
  );
}
