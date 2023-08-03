import "../style/service.css"
import DiamondIcon from '@mui/icons-material/Diamond';
import CodeOffRoundedIcon from '@mui/icons-material/CodeOffRounded';
import AppBlockingIcon from '@mui/icons-material/AppBlocking';

const Servces = () => {
  return (
    <div className="services">
        <div className="service-container">
            <h1>Services</h1>
            <div className="service-below">
                <div className="section service-below-1">
                    <div className="below-section-1">
                        <CodeOffRoundedIcon className="service-icon"  fontSize="large"></CodeOffRoundedIcon>
                        <h2>Web Development</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime officia maiores nihil dolore accusantium quidem porro dignissimos blanditiis quibusdam saepe excepturi pariatur ab ullam non quis, quam esse. Omnis, labore corrupti nostrum qui dolores eos laboriosam. Adipisci cum soluta nisi hic dolor dolores accusantium praesentium saepe magni reprehenderit quisquam facilis porro quidem suscipit unde earum ducimus facere, consequuntur veriur accusamus?</p>
                </div>
                <div className="section service-below-1">
                    <div className="below-section-1">
                        <DiamondIcon className="service-icon"  fontSize="large"></DiamondIcon>
                        <h2>Web Design</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime officia maiores nihil dolore accusantium quidem porro dignissimos blanditiis quibusdam saepe excepturi pariatur ab ullam non quis, quam esse. Omnis, labore corrupti nostrum qui dolores eos laboriosam. Adipisci cum soluta nisi hic dolor dolores accusantium praesentium saepe magni reprehenderit quisquam facilis porro quidem suscipit unde earum ducimus facere, consequuntur veriur accusamus?</p>
                </div>
                <div className="section service-below-1">
                    <div className="below-section-1">
                        <AppBlockingIcon className="service-icon"  fontSize="large"></AppBlockingIcon>
                        <h2>App Development</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime officia maiores nihil dolore accusantium quidem porro dignissimos blanditiis quibusdam saepe excepturi pariatur ab ullam non quis, quam esse. Omnis, labore corrupti nostrum qui dolores eos laboriosam. Adipisci cum soluta nisi hic dolor dolores accusantium praesentium saepe magni reprehenderit quisquam facilis porro quidem suscipit unde earum ducimus facere, consequuntur veriur accusamus?</p>
                </div>
              
            </div>
        </div>
    </div>
  )
}
//{}[]
export default Servces