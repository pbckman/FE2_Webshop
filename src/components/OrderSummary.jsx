import styled from "styled-components";

const SummaryWrapper = styled.div`
background-color: #f0f8ff;
width: 315px;
height: 350px;
border-radius: 20px;
position: relative;
margin-top: 20px;
margin-left: 20px;
h3, p, div {
        font-family: 'Roboto', sans-serif;
    }
`

const SummaryHeadlinge = styled.div`
display: flex;
justify-content: start;
margin-left: 35px;
`

const PriceSummary = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 35px; 

  div {
    display: flex;
    flex-direction: row;
  }

  .summaryprice {
    margin-right: 170px;
  }

  .summaryprice1 {
    margin-right: 105px;
  }

  .ordertotal {
    font-weight: bold;
    margin-right: 170px;
  }

  .ordertotalprice {
    font-weight: bold;
  }

  .totaldiv {
    margin-top: 50px;
  }
`

const ContinueToPayment = styled.div`
position: absolute;
bottom: 20px;
left: 40px;
    button{
        width: 240px;
        height: 40px;
        border-radius: 10px;
        background-color: #007bec;
        border: none;
        color: white;
        font-weight: bold;
    }
`

function OrderSummary() {
    return (
        <SummaryWrapper>
            <SummaryHeadlinge> <h3>Summa</h3> </SummaryHeadlinge>
            <PriceSummary> 
                <div>
                    <p className="summaryprice">Varor</p>
                    <p>$1197</p>
                </div>
                <div>
                    <p className="summaryprice1">Leveransavgift</p>
                    <p>$0</p>
                </div>

                <div className="totaldiv">
                    <p className="ordertotal">Totalt</p>
                    <p className="ordertotalprice">$1197</p>
                </div>
            </PriceSummary>

            <ContinueToPayment><button>Fortsätt till betalning</button> </ContinueToPayment>
        </SummaryWrapper>
    )
}

export default OrderSummary