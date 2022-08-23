import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, Modal, Button, Card, Pagination, Nav, } from "@themesberg/react-bootstrap";
import {
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faCheck,
    faEllipsisH,
    faMinus,
    faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import ReactHero from "../../assets/img/team/profile-picture-3.jpg";
import Profile from "../../assets/img/team/profile.png";
import CommonCard from "../../components/CommonCard";
import Navbar from "../../components/Navbar";
import RecommendCard from "../../components/RecommendCard";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/spinner";
import {
    getSeekerListing,
    getCategoryListing,
    getJobFilter
} from "../../Redux/Dashboard/actions";
import NoRecordFound from "../../components/NoRecordFound";
import { useHistory, useLocation } from "react-router-dom";
import { markAsFavouriteJob } from "../../Redux/addJob/actions";
import Select from "react-select";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePlacesWidget } from "react-google-autocomplete";
import Autocomplete from "react-google-autocomplete";
import { Rating } from "react-simple-star-rating";
import Slider from "@mui/material/Slider";
import { setDate } from "date-fns";


const Settings = (props) => {
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(true);
    const YOUR_GOOGLE_MAPS_API_KEY = "AIzaSyBJWt1Yh6AufjxV8B8Y8UVz_25cYV1fvhs";
    const history = useHistory();
    const params = useLocation();
    const activeForm = history?.location?.state
    const SeekerList = useSelector((state) => state?.Seeker?.getSeekerListing?.jobs);
    const auth = useSelector((state) => state.auth.Auther);
    const SearchFilter = useSelector((state) => state?.Seeker?.FilterList);
    const place = useSelector((state) => state?.geometry?.location?.lat);
    const Filter = useSelector((state) => state?.Seeker?.FilterList?.jobs);
    const CategoryData = useSelector((state) => state?.Seeker?.CategoryList);
    const [valuetext, setValuetext] = useState()
    const [data, setData] = useState()
    const [type, setType] = useState("");
    const [search, setSearch] = useState("");
    const [showDefault, setShowDefault] = useState(false);
    const [categories, setCategories] = useState(null);
    const [categoryList, setCategoryList] = useState([]);
    const [location, setLocation] = useState([]);
    const [distance, setDistance] = useState();
    const [hourlyRate, setHourlyRate] = useState();
    const [longitude, setLogintude] = useState();
    const [latitude, setLatitude] = useState();
    const [rating, setRating] = useState(0); // initial rating value
    const [limit] = useState("10");
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (Filter !== undefined) {
            setData(Filter)
        }
    }, [Filter])
    const nextPage = () => {
        if (page < SearchFilter?.pages) {
            setPage(page + 1);
        }
    };
    const previousPage = () => {
        if (1 > page) {
            setPage(page - 1);
        }
    };

    const paginationItems = () => {
        let items = [];
        for (let number = 1; number <= SearchFilter?.pages; number++) {
            items.push(
                <Pagination.Item
                    key={number}
                    active={number === page}
                    onClick={() => {
                        setPage(number);
                    }}
                >
                    {number}
                </Pagination.Item>
            );
        }
        return items;
    };
    useEffect(() => {
        let array = [];
        CategoryData.map((item) => {
            array.push({
                value: [{ id: item.id, title: item.title, details: item.details }],
                label: item?.title,
            });
        });
        setCategoryList(array);
    }, [CategoryData]);
    useEffect(() => {
        dispatch(
            getSeekerListing({
                page: 1,
                limit: 5,
                setLoader: setLoader,
            })
        );
    }, []);
    const Distance = [
        {
            value: "None",
            label: "None",
        },
        {
            value: "100",
            label: "100 KM",
        },
        {
            value: "200",
            label: "200 KM",
        },
        {
            value: "300",
            label: "300 KM",
        },
    ];
    const Rating = [
        {
            value: "None",
            label: "None",
        },
        {
            value: "1",
            label: "1",
        },
        {
            value: "2",
            label: "2",
        },
        {
            value: "3",
            label: "3",
        },
        {
            value: "4",
            label: "4",
        },
        {
            value: "5",
            label: "5",
        },
    ];
    const Hourly = [

        {
            value: "Low",
            label: "Low",
        },
        {
            value: "High",
            label: "High",
        },

    ];
    const handleClicks = (event) => {
        setRating(event.target.value);
    };
    const handleDistance = (event) => {
        setDistance(event.target.value);
    };
    const handleHourly = (event) => {
        setHourlyRate(event.target.value);
    };
    useEffect(() => {
        dispatch(
            getCategoryListing({
                role: "user",
            })
        );
    }, []);
    const { ref } = usePlacesWidget({
        apiKey: YOUR_GOOGLE_MAPS_API_KEY,
        onPlaceSelected: (place) => {
            setLocation(place.formatted_address);
            setLogintude(place.geometry.location.lng());
            setLatitude(place.geometry.location.lat())
        },
        options: {
            types: ["(regions)"],
        },
        defaultValue: location,
    });
    
    return (
        <>
            <Navbar module={"Settings"} />
            <Container>
               
            </Container>

        </>
    );
};

export default Settings;
