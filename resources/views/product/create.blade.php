@extends('master')
@section('content')
        <div class="container">
        <form class="form-horizontal" action="/product" method="post">
        {{ csrf_field() }}
            <div class="form-group">
                <label for="exampleInputEmail1">name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" name="name" placeholder="name">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">type</label>
                <select class="form-control" name="type" id="">
                    <option value="1">อาหารแห้ง</option>
                    <option value="2">เครื่องดื่ม</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">count</label>
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="count" name="count">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">price</label>
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="price" name="price">
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
@endsection


