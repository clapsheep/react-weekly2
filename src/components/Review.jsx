import { ReviewList, ReviewContainer } from "./ReviewComponent";
import noticeData from "../data/noticeData.json";
import reviewData from "../data/reviewData.json";
import classes from "./Review.module.css";
import { Notice } from "./notice";

function Review() {
  return (
    <>
      <div
        style={{
          margin: "0 auto",
          width: "1050px",
          position: "relative",
          paddingBottom: "56px",
        }}
      >
        <h2 className={classes.reviewTitle}>상품후기</h2>
        <span className={classes.reviewReward}>
          글후기 50원 적립금 혜택이 있어요.
        </span>
        <ul className={classes.reviewInfo}>
          <li>
            퍼플, 더퍼플은 2배 적립(100원) / 주간 베스트 후기로 선정 시 5,000원
            추가 적립
          </li>
          <li>후기 작성은 배송완료일로부터 30일 이내 가능합니다.</li>
          <li>
            작성하신 후기는 확인 후 적립금이 지급됩니다.(영업일 기준 평균 1~2일
            소요)
          </li>
        </ul>
        <button id="openReviewButton" className={classes.reviewButton}>
          후기 작성하기
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "24px",
          width: "1050px",
          margin: "0 auto",
          borderBottom: "2px solid black",
          paddingBottom: "16px",
        }}
      >
        <span className={classes.reviewQuantity}>
          총 {reviewData.items.length}개
        </span>
        <div className={classes.sortButton}>
          <button className={classes.sortRecommand}>추천순</button>
          <span>|</span>
          <button id="sortRecent">최근등록순</button>
        </div>
      </div>
      {noticeData.items.map(({ id, title, content }) => {
        return (
          <Notice key={id} title={title}>
            {content}
          </Notice>
        );
      })}

      <ReviewContainer>
        {reviewData.items.map(
          ({
            id,
            userClass,
            name,
            product,
            content,
            date,
            recommand,
            isBest,
          }) => {
            return (
              <ReviewList
                key={id}
                userClass={userClass}
                product={product}
                content={content}
                date={date}
                recommand={recommand}
                name={name}
                isBest={isBest}
              ></ReviewList>
            );
          }
        )}
      </ReviewContainer>
    </>
  );
}

export default Review;
