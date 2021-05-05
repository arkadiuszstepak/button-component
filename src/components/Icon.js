import ShoppingIcon from "@material-ui/icons/AddShoppingCart";

const Icon = ({ iconName }) => {
  if (iconName == "local_grocery_store")
    return (
      <ShoppingIcon style={{ fontSize: 18 }} className="Icon"></ShoppingIcon>
    );
};

export default Icon;
