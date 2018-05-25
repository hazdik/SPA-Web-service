import {Model} from 'mongoose';
import {Component, Inject} from '@nestjs/common';
import Person from './person.interface';
import CreatePersonDto from './person.dto';
import {ClientName} from "../clients/clients.enums";

@Component()
export default class PersonDataService {
    constructor(@Inject('PersonModelToken') private readonly personModel: Model<Person>) {}

    async create(person: Person): Promise<Person> {
        const createdPerson = new this.personModel(person);
        return await createdPerson.save();
    }

    async find(offset: number, limit: number, value: string): Promise<Person[]> {
        if (value.length > 0) {
            return await this.personModel.paginate({$text: {$search: value}}, {offset, limit})
        }
        return await this.personModel.paginate({}, {offset, limit});
    }

    async search(searchString): Promise<Person[]> {
        if (searchString.length === 0) {
            return await this.personModel.paginate({}, {limit: 10})
        } else {
            return await this.personModel.paginate({$text: {$search: searchString}}, {limit: 10})
        }
    }

    async getByClientNameAndPersonKey(personKey: object, clientName: ClientName) {
        return await this.personModel.findOne({
            'personKey': personKey,
            'clientName': clientName
        }).exec();
    }

}