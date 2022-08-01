type Props={
    getTotal: any;
}

export function Total({getTotal}:Props){
    return(
        <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>

        <div>
          <span className="total-number">£{getTotal().toFixed(2)}</span>
        </div>
      </div>
        )
    }