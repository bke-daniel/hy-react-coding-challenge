import { useQuery, gql } from "@apollo/client";

const QUERY = gql`
  query getSingleFlight($flightid: Int!) {
    flight(id: $flightid) {
      id
      origin
      description
      owner
    }
  }
`;

export default () => {
  const { data } = useQuery(QUERY);
  console.log(data);

  return (
    <>
      <label htmlFor="flights-from">Flights from&nbsp;</label>

      <select name="flights-from">
        <option value="US">US</option>
        <option value="DE">DE</option>
      </select>

      <ul></ul>
    </>
  );
};
