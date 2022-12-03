import React from "react";

function Visible() {
    return (
        <div>
      {/* <div className="app">
        <div className="modal-dialog">
          <div className="modal-content">
            <button onClick={this.changeClick} type="button" className="btn btn-primary">
              Уведомления
            </button>
          </div>
        </div>
      </div> */}
      <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Заказ 18020642-0063 доставлен</h5>
              </div>
              <div className="modal-body">
                <p>
                  Заберите его в пункте выдачи до 15 апреля включительно, потом
                  заказ придется отменить.
                  <br />
                  Вход в пункт выдачи только в маске и перчатках.
                </p>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
      </div>
    );
  }


export default Visible;