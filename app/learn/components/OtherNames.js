export default function OtherNames({ d }) {
    if (d?.other_name?.length) {
      return (
        <p className="text-start pb-8 text-light-pink/80">
          {" " +
            d.other_name
              .filter((item) => {
                return item.length > 1;
              })
              .join(", ")}
        </p>
      );
    } else {
      return <></>;
    }
}