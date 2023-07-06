import {
  Button,
  styled,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  keyframes
} from "@mui/material";
import { categories } from "../../constants/data";
import { Link, useSearchParams } from "react-router-dom";




const StyledTable = styled(Table)`
  border: 1px solid rgba(224, 224, 224, 1);
  animation: fadeIn 0.5s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const StyledButton = styled(Button)`
  margin: 20px;
  width: 85%;
  background: #3f51b5;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease;

  &:hover {
    background: #1a237e;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #3f51b5;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #00bcd4;
  }
`;

const StyledTableCell = styled(TableCell)`
  font-weight: bold;
  color: #3f51b5 !important;
  text-transform: uppercase;
`;

const Categories = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  return (
    <>
      <StyledLink to={`/create?category=${category || ''}`}>
        <StyledButton variant="contained">Create Blog</StyledButton>
      </StyledLink>
      <StyledTable>
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <StyledLink to='/'>All Categories</StyledLink>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map(category => (
            <TableRow key={category.id}>
              <StyledTableCell>
                <StyledLink to={`/?category=${category.type}`}>
                  {category.type.toUpperCase()}
                </StyledLink>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </>
  );
};


export default Categories;
