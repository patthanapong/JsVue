@extends('master')
@section('content')
        <div class="container">
        <div class="row">
        <a href="/product/create" class="btn btn-primary">Add</a>
            <div class="col-sm-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>type</th>
                            <th>count</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                    @foreach($products as $product)
                        <tr>
                            <td>{{ $product->name }}</td>
                            <td>{{ $product->type }}</td>
                            <td>{{ $product->count }}</td>
                            <td>{{ $product->price }}</td>                        
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection

