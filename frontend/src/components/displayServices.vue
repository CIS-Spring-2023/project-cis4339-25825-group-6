<script>
const apiURL = import.meta.env.VITE_ROOT_API

// Needs to dynamically read from an array of services and out put them accordingly
// should have active and non-active var
// gonna need props to send to parent component createEvent.vue
// This is similar to homework 1

export default {
        data() {
            // The model properties. The view should loop
            // through the facilities array and generate a li
            // element for every one of its items.
            return { facilities: [
                {
                    name: 'Ballroom',
                    price: 5000,
                    active:true
                },{
                    name: 'Backyard',
                    price: 400,
                    active:false
                },{
                    name: 'Wellness Area',
                    price: 250,
                    active:false
                },{
                    name: 'Restaurant',
                    price: 220,
                    active:false
                }
            ]
            }
        },
        methods: {
            // this method will toggle an item to make it active/inactive (no change necessary)
            toggleActive: function(s){
                s.active = !s.active;
            },
            // method to calculate the total amount
            total: function(){
                // variable to hold total
                var total = 0;

                //loop through facilities
                for (var i = 0; i < this.facilities.length; i++) {
                    //check whether item is active
                    if (this.facilities[i].active) {
                        //sum up for total
                        total += this.facilities[i].price;
                    }    
                    //
                }    
                //
            return total;
            },
            // method to format as currency
            formatCurrency(value) {
                // put dollar sign in front of value and show 2 deci,al places e.g $500.00
                value = '$' + value.toFixed(2);
                return value;
            }
        },
        //This is where I expose this component up the tree
        components: {
            displayServices: '#main'
        }
    }
</script>

<template>
    <form id="main">
    <h1>Facilities</h1>

    <ul>
        <!-- Loop through the facilities array, assign a click handler, and set or
             remove the "active" css class if needed -->
        <li v-for="facility in facilities" v-on:click="toggleActive(facility)" v-bind:class="{ active: facility.active }">
            <!-- Display the name and price for every entry in the array .
                Use the formatCurrency method for formatting the price -->
            {{facility.name}} <span>{{formatCurrency(facility.price)}}</span>
        </li>
    </ul>

    <div class="total">
        <!-- Calculate the total price of all chosen facililtys. Format it as currency using formatCurrency. -->
        Total: <span> {{ formatCurrency(total()) }} </span>
    </div>

    </form>
</template>

