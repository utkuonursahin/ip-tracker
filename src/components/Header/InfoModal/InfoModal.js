import {useIPData} from "../../../context/IPDataContext/IPDataContext";

const InfoModal = () => {
  const {data} = useIPData()
  return (
      <div className="info-modal">
        <ul className="info-modal__list">
          <li className="info-modal__list-item">
            <h2>IP ADDRESS</h2>
            <span>{data.ip}</span>
          </li>
          <li className="info-modal__list-item">
            <h2>LOCATION</h2>
            <span>{data.location.region}</span>
          </li>
          <li className="info-modal__list-item">
            <h2>TIMEZONE</h2>
            <span>{data.location.timezone}</span>
          </li>
          <li className="info-modal__list-item">
            <h2>ISP</h2>
            <span>{data.isp}</span>
          </li>
        </ul>
      </div>
  );
};

export default InfoModal;
