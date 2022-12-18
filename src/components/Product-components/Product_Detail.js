import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Product = () => {
  const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();

  // const LoadDetail = (id) => {
  //   navigate("/product/detail/" + id);
  // };
  // const navigateToPage = () => {
  //   this.context.router.push("/my-route");
  // };
  const LoadEdit = (id) => {
    console.log(id);
    navigate("/product/edit/" + id);
  };
  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:5000/product/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => {
        // console.log(res, "1");
        return res.json();
      })
      .then((resp) => {
        // console.log(resp.data, " 2");
        empdatachange(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Product Listing</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="create" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name Product</td>
                <td>Detail</td>
                <td>Price</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empdata &&
                empdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.tensp}</td>
                    <td>{item.chitiet}</td>
                    <td>{item.gia}</td>
                    <td>
                      <Link
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                        className="btn btn-success"
                      >
                        Edit
                      </Link>

                      <Link
                        onClick={() => {
                          Removefunction(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </Link>
                      {/* <Link
                        onClick={() => {
                          LoadDetail(item.id);
                        }}
                        className="btn btn-primary"
                      >
                        Details
                      </Link> */}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Product;
