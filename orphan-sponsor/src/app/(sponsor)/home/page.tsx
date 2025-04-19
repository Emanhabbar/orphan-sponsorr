
import FilterForm from "@/components/createpost";
import CategoriesSlider from "@/components/jam";
import PostCard from "@/components/post";
import StructurePost from "@/components/posts/structure-post";
import { Grid, Box } from "@mui/material";

import tabBar from "@/components/tabBar";
import searchBar from "@/components/searchBar";
import RamadanSlider from "@/components/image-animation";

function Page() {
  return (
    <>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <RamadanSlider />
        </Grid>
        <Grid item xs={12}>
          <CategoriesSlider />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={1.5}>
            </Grid>

            <Grid item xs={12} md={6}>
              <StructurePost />
            </Grid>

            <Grid item xs={12} md={3} >
              <FilterForm />
            </Grid>
            
            <Grid item xs={12} md={1.5}>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Page;